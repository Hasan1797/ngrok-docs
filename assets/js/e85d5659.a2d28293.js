"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[61110],{98597:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=t(51163),n=(t(59496),t(49613));const r={},i="How to set up a custom domain",d={unversionedId:"guides/how-to-set-up-a-custom-domain",id:"guides/how-to-set-up-a-custom-domain",title:"How to set up a custom domain",description:"---",source:"@site/docs/guides/how-to-set-up-a-custom-domain.md",sourceDirName:"guides",slug:"/guides/how-to-set-up-a-custom-domain",permalink:"/docs/guides/how-to-set-up-a-custom-domain",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/guides/how-to-set-up-a-custom-domain.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{},sidebar:"docs",previous:{title:"How to Round-Robin Load Balance with ngrok Cloud Edges",permalink:"/docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges"},next:{title:"Load Balancing with ngrok Cloud Edges",permalink:"/docs/guides/load-balancing-with-cloud-edges"}},u={},s=[{value:"Add your domain name to your ngrok account",id:"add-your-domain-name-to-your-ngrok-account",level:3},{value:"Create a CNAME record",id:"create-a-cname-record",level:3},{value:"Connect your tunnel",id:"connect-your-tunnel",level:3}],l={toc:s},m="wrapper";function c(e){let{components:o,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-set-up-a-custom-domain"},"How to set up a custom domain"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you're already using ngrok with subdomains of an ngrok owned domain but would like to have your tunnels available from a domain that you own, you're in the right place."),(0,n.kt)("p",null,"Let's assume you've registered a domain name like ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com")," with a domain name registrar and you want to use it with ngrok. First you'll need to decide exactly which DNS name you want to use. Because we assign each of your custom domains a randomly-generated name under our domain to use as a CNAME record value, we usually recommend you choose a subdomain of your primary domain rather than the primary domain itself. So let's say you're going to set up ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.example.com"),"."),(0,n.kt)("p",null,"To get ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.example.com")," working with an ngrok tunnel you'll need to perform one step within your ngrok account dashboard and one step with the DNS host for your domain name. In many cases your DNS records are hosted by your domain name registrar, but not always."),(0,n.kt)("h3",{id:"add-your-domain-name-to-your-ngrok-account"},"Add your domain name to your ngrok account"),(0,n.kt)("p",null,'Add your domain name to your ngrok account. We currently call this process "reservation" and you can do it from the domains page of ',(0,n.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/cloud-edge/domains"},"your ngrok dashboard"),"."),(0,n.kt)("p",null,'Click "New Domain" and then put ',(0,n.kt)("inlineCode",{parentName:"p"},"foo.example.com")," into the form that appears to add that domain to your account. Once validated you can also add a Description, attach an Edge and select your TLS Certificate configuration (we recommend our automated TLS certificates)."),(0,n.kt)("p",null,"After adding your domain you should see instructions related to creating a CNAME record. Copy the value of your newly-added domain's CNAME target hostname, which will be something like ",(0,n.kt)("inlineCode",{parentName:"p"},"<random-string>.<random-string>.ngrok-cname.com.")),(0,n.kt)("h3",{id:"create-a-cname-record"},"Create a CNAME record"),(0,n.kt)("p",null,"Head over to your DNS provider and create a new record on the ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com")," domain. Every DNS provider has a distinct user interface but just by way of example here's what this interface looks like when setting up DNS records with Google Domains:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(73621).Z,width:"1025",height:"337"})),(0,n.kt)("p",null,"You'll create a record of type CNAME where the name is ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and the value is your ngrok CNAME target, ",(0,n.kt)("inlineCode",{parentName:"p"},"<random-string>.<random-string>.ngrok-cname.com"),". This will ensure that any DNS queries for ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.example.com")," are resolved with an IP from our service edge."),(0,n.kt)("p",null,"Once created it may take a few minutes before the new record is reflected in the DNS, but you can confirm that your record is created using a command line tool like ",(0,n.kt)("inlineCode",{parentName:"p"},"dig")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"nslookup"),'. Or if you still have the ngrok dashboard displayed with your CNAME target hostname from Step 1, you should be able to use the "Check Status" button at the bottom right of the page to confirm that your record was created correctly.'),(0,n.kt)("h3",{id:"connect-your-tunnel"},"Connect your tunnel"),(0,n.kt)("p",null,"Once your DNS record is in place you can create a tunnel using your new domain. Try running:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ngrok http --domain=foo.example.com 8080")),(0,n.kt)("p",null,"and presuming you're actually running an application on port 8080 then making an HTTP request to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://foo.example.com")," should return a response from your app."))}c.isMDXComponent=!0},73621:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/customdomain-img1-da4b0058a76457f6cf0a2c9fbb66b523.png"}}]);