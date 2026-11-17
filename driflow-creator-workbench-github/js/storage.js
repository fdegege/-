(() => {
  const DATABASE = "driflow-creator-workbench";
  const STORE = "app-state";
  const VERSION = 1;
  let databasePromise;

  function openDatabase() {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("此浏览器不支持 IndexedDB，无法保存本地数据。"));
        return;
      }
      const request = indexedDB.open(DATABASE, VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("打开本地数据库失败。"));
      request.onblocked = () => reject(new Error("数据库升级被其他页面占用，请关闭旧页面后重试。"));
    });
    return databasePromise;
  }

  async function load() {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const request = db.transaction(STORE, "readonly").objectStore(STORE).get("workspace");
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error || new Error("读取本地数据失败。"));
    });
  }

  async function save(state) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE, "readwrite");
      transaction.objectStore(STORE).put(state, "workspace");
      transaction.oncomplete = () => resolve(true);
      transaction.onerror = () => reject(transaction.error || new Error("保存本地数据失败。"));
      transaction.onabort = () => reject(transaction.error || new Error("本地数据保存已取消。"));
    });
  }

  window.DriflowStorage = Object.freeze({ load, save });
})();
