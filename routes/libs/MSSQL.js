class MSSQL {
  #mssql;
  #config;
  #pool;
  constructor(user, password, server, database) {
    this.#mssql = require("mssql");
    this.#config = {
      user,
      password,
      server,
      database,
      requestTimeout: 120000000,
      options: {
        encrypt: false,
        trustServerCertificate: false,
      },
    };
  }

  disconnect() {
    this.#pool.close();
  }

  execute(sql) {
    return new Promise(async (resolve, reject) => {
      try {
        this.#pool = await this.#mssql.connect(this.#config);
        const query = await this.#pool.request().query(sql);
        resolve({ state: true, query });
      } catch (err) {
        console.log(err);
        reject({ state: false, query: {} });
      }
    });
  }
}

module.exports = MSSQL;
