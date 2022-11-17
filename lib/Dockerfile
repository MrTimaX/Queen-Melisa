FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/MrTimaX/Queen-Melisa /root/mrtima
WORKDIR /root/mrtima/
RUN yarn install --network-concurrency 1
CMD ["node", "lib/client.js"]
 
