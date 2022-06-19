from node as builder 
workdir /usr/app
copy package*.json ./
run npm i 
copy . . 
run npm run start


from node 
workdir /usr/appcopy package*.json ./
run npm i --production 

copy --from=builder /usr/app/ .