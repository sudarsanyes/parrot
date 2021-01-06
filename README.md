# parrot

Ahoy! 
ZeeZeeParrot is a simple pictionary word chooser. The application is written in two parts: 
- **ZeeZeeParrotService** in asp net core and 
- **ZeeZeeParrotClient** in angular

The service is hosted in my azure portal profile, while the client is hosted in github deployment. 

To deploy the client, run the following commands. 

```
ng build --prod --base-href "https://sudarsanyes.github.io/parrot/"
npx angular-cli-ghpages -dir=./dist
```
> Note: Copy the contents of the parrot folder after ng build to the root folder before executing the npx command. 
