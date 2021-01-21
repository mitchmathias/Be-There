const PhotoSchema = Schema({
    _id: {
        type:UUID, default: uuidv4
    },
    filename: String,
}
)
PhotoSchema.set('toObject',{getters: true});
PhotoSchema.set('toJSON',{getters: true});

const Photo = mongoose.model('Photo', PhotoSchema);