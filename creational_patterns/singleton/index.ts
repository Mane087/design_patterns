namespace Singleton {
  class AppConfig {
    private static instance: AppConfig;

    private constructor(
      public readonly apiUrl: string,
      public readonly language: string,
      public readonly darkMode: boolean
    ) {}

    static getInstance(): AppConfig {
      if (!AppConfig.instance) {
        // Se crea una única vez
        AppConfig.instance = new AppConfig(
          "https://api.miservicio.com",
          "es",
          true
        );
      }
      return AppConfig.instance;
    }
  }

  // Uso desde cualquier parte de la app
  const config1 = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();

  console.log(config1 === config2); // true, ambas referencias son la misma instancia

  console.log(config1.apiUrl); // https://api.miservicio.com
  console.log(config2.language); // es
}
