import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
});

const Contacts = mongoose.model('Contacts', contactSchema);

export default Contacts;
