FROM node:alpine            
#qual versão de qual máquina eu quero utilizar
WORKDIR /usr/app            
#diretório da maquina que quero trabalhar, você pode escolher o diretório que preferir.
COPY package*.json ./       
#copiar todos os aquivos que começam com "package" e terminam com ".json"
RUN npm install             
#somente com esses arquivos copiados o servidor iniciara com uma versão de máquina virtual na qual o Node possa rodar.

COPY . .                   
#COPIA TODOS OS ARQUIVOS RESTANTES PARA DENTRO da maquina virtual, como já rodamos o comando anterior ('install') adicionamos um '.dockerignore'

EXPOSE 3000

CMD ["npm","start"]