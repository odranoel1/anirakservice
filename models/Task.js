class Task {
    constructor(obj) {
        this.id = obj.id;
        this.desc = obj.desc;
        this.completed = obj.completed;
        this.createdAt = obj.createdAt;
        this.url = obj.url ? obj.url : '';
    }
}

module.exports = Task;