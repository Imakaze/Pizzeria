const redis = require("redis");
const client = redis.createClient({ return_buffers: true });
client.hset(key, "data", data, redis.print);
client.hset(key, "type", mimetype, redis.print); 


class ImageRepository {
    add(Image){
        client.set(Image.id, JSON.stringify('hex'),function(){
            console.log(arguments);
        });
        new Buffer( buffer.toString('hex'), 'hex' );
    }   
}

module.exports = ImageRepository;