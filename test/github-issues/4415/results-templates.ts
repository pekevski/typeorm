export const resultsTemplates: Record<string, any> = {

    postgres: {
        control: [
            `CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
            `CREATE TABLE "username" ("username" character varying NOT NULL, "email" character varying NOT NULL, "something" character varying NOT NULL, CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username"))`
        ],
        pretty: [
    `
            CREATE TABLE "post" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
            )
    `,
    `
            CREATE TABLE "username" (
                "username" character varying NOT NULL,
                "email" character varying NOT NULL,
                "something" character varying NOT NULL,
                CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username")
            )
    `
        ]
    },

    mssql: {
        control: [
            `CREATE TABLE "post" ("id" int NOT NULL IDENTITY(1,1), "title" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_fb91bea2d37140a877b775e6b2a" DEFAULT getdate(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
            `CREATE TABLE "username" ("username" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "something" nvarchar(255) NOT NULL, CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username"))`
        ],
        pretty: [
    `
            CREATE TABLE "post" (
                "id" int NOT NULL IDENTITY(1, 1),
                "title" nvarchar(255) NOT NULL,
                "createdAt" datetime2 NOT NULL CONSTRAINT "DF_fb91bea2d37140a877b775e6b2a" DEFAULT getdate(),
                CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
            )
    `,
    `
            CREATE TABLE "username" (
                "username" nvarchar(255) NOT NULL,
                "email" nvarchar(255) NOT NULL,
                "something" nvarchar(255) NOT NULL,
                CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username")
            )
    `
        ]
    },

    sqlite: {
        control: [
            `CREATE TABLE "post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`,
            `CREATE TABLE "username" ("username" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "something" varchar NOT NULL)`,
        ],
        pretty: [
    `
            CREATE TABLE "post" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
    `,
    `
            CREATE TABLE "username" (
                "username" varchar PRIMARY KEY NOT NULL,
                "email" varchar NOT NULL,
                "something" varchar NOT NULL
            )
    `
        ]
    },

    mysql: {
        control: [
            `CREATE TABLE \`post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
            `CREATE TABLE \`username\` (\`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`something\` varchar(255) NOT NULL, PRIMARY KEY (\`username\`)) ENGINE=InnoDB`
        ],
        pretty: [
    `
            CREATE TABLE \`post\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`title\` varchar(255) NOT NULL,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
    `,
    `
            CREATE TABLE \`username\` (
                \`username\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`something\` varchar(255) NOT NULL,
                PRIMARY KEY (\`username\`)
            ) ENGINE = InnoDB
    `
        ]
    },

    oracle: {
        control: [
            `CREATE TABLE "post" ("id" number GENERATED BY DEFAULT AS IDENTITY, "title" varchar2(255) NOT NULL, "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
            `CREATE TABLE "username" ("username" varchar2(255) NOT NULL, "email" varchar2(255) NOT NULL, "something" varchar2(255) NOT NULL, CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username"))`
        ],
        pretty: [
    `
            CREATE TABLE "post" (
                "id" number GENERATED BY DEFAULT AS IDENTITY,
                "title" varchar2(255) NOT NULL,
                "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
                CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
            )
    `,
    `
            CREATE TABLE "username" (
                "username" varchar2(255) NOT NULL,
                "email" varchar2(255) NOT NULL,
                "something" varchar2(255) NOT NULL,
                CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username")
            )
    `
        ]
    },

    cockroachdb: {
        control: [
            `CREATE SEQUENCE "post_id_seq"`,
            `CREATE TABLE "post" ("id" INT4 DEFAULT nextval('"post_id_seq"') NOT NULL, "title" varchar NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
            `CREATE TABLE "username" ("username" varchar NOT NULL, "email" varchar NOT NULL, "something" varchar NOT NULL, CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username"))`
        ],
        pretty: [
    `
            CREATE SEQUENCE "post_id_seq"
    `,
    `
            CREATE TABLE "post" (
                "id" INT4 DEFAULT nextval('"post_id_seq"') NOT NULL,
                "title" varchar NOT NULL,
                "createdAt" timestamptz NOT NULL DEFAULT now(),
                CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
            )
    `,
    `
            CREATE TABLE "username" (
                "username" varchar NOT NULL,
                "email" varchar NOT NULL,
                "something" varchar NOT NULL,
                CONSTRAINT "PK_b39ad32e514b17e90c93988888a" PRIMARY KEY ("username")
            )
    `
        ]
    },

    get mariadb() { return this.mysql; },
    get "better-sqlite3"() { return this.sqlite; },
};
