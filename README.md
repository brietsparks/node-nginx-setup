### Setup this envirnment
first you will need to pick a fake domain
let's say for example ****example.com***
then you will need to do some changes on the **hosts** file
you will need to add this line to the file
```
127.0.0.1	example.com
```
and the hosts file exist in ```/etc/hosts```
NOTE : you have to edit this file as admin

and the file result will look something like this

```
127.0.0.1	localhost
# this is the line you should add
127.0.0.1	example.com
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
...
```

after that you can access your local application through the domain example.com

after you do this now you will go the ***docker-compose.yml*** file and go to the nginx service where the nework is and you will fine an aliase in the newerk section with a domain like ****example.com*** you will need to change that you the first domain you choosed befor.

now you have to change the ***nginx.conf*** file that exist in ***nginx-conf*** folder to point to the new domain
go to the server blocks and change the server_name to your fake domain like this
```
server {
   ...
    server_name example.com;
    ...
}
```

after that you will need to change the ssl certificate path  in nginx accroding to you doamain (we will generate this certificate in the next step)

so you will need to go again to the nginx configuration and chnage this line

```
ssl_certificate /etc/nginx/ssl/FAKE_DOMAIN.pem;
ssl_certificate_key /etc/nginx/ssl/FAKE_DOMAIN-key.pem;
```
so it will look something like this
```
ssl_certificate /etc/nginx/ssl/example.com.pem;
ssl_certificate_key /etc/nginx/ssl/example.com-key.pem;
```
after that there is only one part left which is generating a new ssl certificate for your Fake domain, and for that we will use a tool called ***mkcert*** that generates fake certificate and add it to your browser so that it can be trusted.
here is the github link to the tool

https://github.com/FiloSottile/mkcert

and then you can follow the steps in the README file for that repo to install it in you own operating system
for example if you have macos

On macOS, use Homebrew
```
brew install mkcert
brew install nss # if you use Firefox
```
or MacPorts.
```
sudo port selfupdate
sudo port install mkcert
sudo port install nss # if you use Firefox
```

and then after you install it access the ssl folder on this repo and execute the following command with the fake domain you choosed before

```
mkcert example.com
mkcert -install
```
NOTE: you have to close all the browsers in this step as the step of installing this certificate on your browser requires the browser to be closed.

and hope this works for as you wanted
