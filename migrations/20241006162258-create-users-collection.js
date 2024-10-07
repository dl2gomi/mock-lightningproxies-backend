module.exports = {
  async up(db, client) {
    // Create the 'users' collection
    await db.createCollection('users');

    // Create indexes if needed
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('users').createIndex({ username: 1 }, { unique: true });
  },

  async down(db, client) {
    // Drop indexes
    await db.collection('users').dropIndex('email_1');
    await db.collection('users').dropIndex('username_1');

    // Drop the 'users' collection
    await db.collection('users').drop();
  },
};
