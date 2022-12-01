"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var supabase_js_1 = require("@supabase/supabase-js");
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
dotenv.config();
// Create a single supabase client for interacting with your database
var supabase = (0, supabase_js_1.createClient)(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);
var prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.CONNECTION_POOL_URL
        }
    }
});
var users = [];
for (var i = 0; i < 20; i++) {
    users.push({
        email: faker_1.faker.internet.exampleEmail(),
        password: 'password123'
    });
}
for (var i = 0; i < users.length; i++) {
    var _a = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password'
    }), session = _a.data, error = _a.error;
    if (session.user) {
        var organization = await prisma.organization.create({
            data: {
                name: faker_1.faker.company.name(),
                website: faker_1.faker.internet.url()
            }
        });
        if (organization) {
            var orgUser = await prisma.organizationUser.create({
                data: {
                    organizationId: organization.id,
                    userId: session.user.id
                }
            });
            var jobs = await prisma.job.createMany({
                data: [
                    {
                        title: faker_1.faker.name.jobTitle(),
                        location: faker_1.faker.address.city(),
                        type: faker_1.faker.helpers.arrayElement([
                            'FULL_TIME',
                            'PART_TIME',
                            'CONTRACT',
                        ]),
                        compType: faker_1.faker.helpers.arrayElement(['SALARY', 'HOURLY']),
                        payScaleBegin: faker_1.faker.datatype.number({ min: 20000, max: 100000 }),
                        payScaleEnd: faker_1.faker.datatype.number({
                            min: 100000,
                            max: 50000000
                        }),
                        description: faker_1.faker.company.catchPhrase(),
                        jobLocType: faker_1.faker.helpers.arrayElement([
                            'REMOTE',
                            'HYBRID',
                            'OFFICE',
                        ]),
                        organizationId: organization.id,
                        userId: session.user.id
                    },
                    {
                        title: faker_1.faker.name.jobTitle(),
                        location: faker_1.faker.address.city(),
                        type: faker_1.faker.helpers.arrayElement([
                            'FULL_TIME',
                            'PART_TIME',
                            'CONTRACT',
                        ]),
                        compType: faker_1.faker.helpers.arrayElement(['SALARY', 'HOURLY']),
                        payScaleBegin: faker_1.faker.datatype.number({ min: 20000, max: 100000 }),
                        payScaleEnd: faker_1.faker.datatype.number({
                            min: 100000,
                            max: 50000000
                        }),
                        description: faker_1.faker.company.catchPhrase(),
                        jobLocType: faker_1.faker.helpers.arrayElement([
                            'REMOTE',
                            'HYBRID',
                            'OFFICE',
                        ]),
                        organizationId: organization.id,
                        userId: session.user.id
                    },
                    {
                        title: faker_1.faker.name.jobTitle(),
                        location: faker_1.faker.address.city(),
                        type: faker_1.faker.helpers.arrayElement([
                            'FULL_TIME',
                            'PART_TIME',
                            'CONTRACT',
                        ]),
                        compType: faker_1.faker.helpers.arrayElement(['SALARY', 'HOURLY']),
                        payScaleBegin: faker_1.faker.datatype.number({ min: 20000, max: 100000 }),
                        payScaleEnd: faker_1.faker.datatype.number({
                            min: 100000,
                            max: 50000000
                        }),
                        description: faker_1.faker.company.catchPhrase(),
                        jobLocType: faker_1.faker.helpers.arrayElement([
                            'REMOTE',
                            'HYBRID',
                            'OFFICE',
                        ]),
                        organizationId: organization.id,
                        userId: session.user.id
                    },
                ]
            });
        }
    }
}
