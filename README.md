# Parrot (a.k.a ZeeZee, the Parrot)

Ahoy! 
ZeeZeeParrot is a simple pictionary word chooser. The application is written in two parts: 
- **ZeeZeeParrotService** in asp net core and 
- **ZeeZeeParrotClient** in angular

The service is hosted in [my azure portal profile](https://portal.azure.com/#@sudarsanyeshotmail.onmicrosoft.com/resource/subscriptions/159d5d7e-43aa-4f17-8c6d-0b7d6c22e9c5/resourceGroups/Default-ApplicationInsights-EastUS/providers/Microsoft.Web/sites/WolverineService/appServices), while the client is hosted [in github deployment](https://sudarsanyes.github.io/parrot/). 

To deploy the client, run the following commands. 

```
ng build --prod --base-href "https://sudarsanyes.github.io/parrot/"
npx angular-cli-ghpages -dir=./dist
```
> Note: Copy the contents of the parrot folder after ng build to the root folder before executing the npx command. 
