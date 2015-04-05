var db = {
    collection(model) {
        this.insert = (data) => {
            var length = data.length;

            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    model.push(data[i]);
                }
            } else {
                model.push(data);
            }
        };

        this.remove = () => {
            console.log(model);
        };

        this.update = () => {
            console.log(model);
        };

        return this;
    }
};

var collection = db.collection(modelData);
collection.insert(
    {
        a: 100,
        z: 300
    }
);
collection.insert(
    [
        {0: 10},
        {1: 50}
    ]
);

console.log(modelData);