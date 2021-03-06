const config = {
    create: {
       /* id: {
            required: true,
            string: true,
            in: ['body'],
            custom(value) {
                console.log('Value', value);
                throw {
                    error: 'Error Occured',
                    message: 'Message',
                };
            },
        },*/
        name: {
            required: false,
            string: true,
           // regex: /[a-z]+[ ][a-z]+$/i,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        email: {
             required: true,
              regex: '',
              in: ['body'],
              errorMessage: 'email is required',
          },
          role: {
               required: true,
                string: true,
                 in: ['body'],
                  errorMessage: 'role is required',
               },
          password: {
               required: true,
                alphaNumeric: true,
                 in: ['body'],
                  errorMessage: 'password is required',
               }
    },
    delete: {
              id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params'],
        },
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
    },
    update: {
        id: {
            required: false,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom(dataToUpdate) {
                console.log();
            },
        },
    },
      login: {
        email: {
            required: true,
            string: true,
            in: ['body']
        },
        password: {
            required: true,
            string: true,
            in: ['body']
        }
    }
};
export default config;