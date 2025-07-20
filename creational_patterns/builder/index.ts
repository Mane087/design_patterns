namespace Builder {
  class Computer {
    public cpu: string = "Not Specified";
    public ram: string = "Not Specified";
    public storage: string = "Not Specified";
    public gpu?: string;

    displayConfig() {
      console.log(
        `CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, GPU: ${this.gpu}`
      );
    }
  }

  class ComputerBuilder {
    private computer: Computer;

    constructor() {
      this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
      this.computer.cpu = cpu;
      return this;
    }

    setRAM(ram: string): ComputerBuilder {
      this.computer.ram = ram;
      return this;
    }

    setStorage(storage: string): ComputerBuilder {
      this.computer.storage = storage;
      return this;
    }

    setGPU(gpu: string): ComputerBuilder {
      this.computer.gpu = gpu ?? "No GPU";
      return this;
    }

    build(): Computer {
      return this.computer;
    }
  }

  function main() {
    const computer: Computer = new ComputerBuilder()
      .setCPU("i7")
      .setRAM("16GB")
      .setStorage("512GB")
      .setGPU("RTX 3060")
      .build();

    computer.displayConfig();
  }

  // main();

  class Query {
    public table: string = "";
    public select?: string[] = [];
    public where?: string[] = [];
    public order_by?: string[] = [];
    public limit?: number = 0;

    displayQuery() {
      console.log(
        `SELECT ${(this.select ?? []).join(", ") || "*"} FROM ${
          this.table
        } WHERE ${(this.where ?? []).join(" AND ")} ORDER BY ${(
          this.order_by ?? []
        ).join(", ")} LIMIT ${this.limit}`
      );
    }
  }

  class QueryBuilder {
    private query: Query;

    constructor() {
      this.query = new Query();
    }

    setTable(table: string): QueryBuilder {
      this.query.table = table;
      return this;
    }

    setSelect(select: string[]): QueryBuilder {
      this.query.select = select;
      return this;
    }

    setWhere(where: string[]): QueryBuilder {
      this.query.where = where;
      return this;
    }

    setOrderBy(order_by: string[]): QueryBuilder {
      this.query.order_by = order_by;
      return this;
    }

    setLimit(limit: number): QueryBuilder {
      this.query.limit = limit;
      return this;
    }

    build(): Query {
      return this.query;
    }
  }

  function main2() {
    const query: Query = new QueryBuilder()
      .setTable("users")
      .setSelect(["name", "age"])
      .setWhere(["age > 18"])
      .setOrderBy(["name ASC"])
      .setLimit(10)
      .build();

    query.displayQuery();
  }

  main2();
}
