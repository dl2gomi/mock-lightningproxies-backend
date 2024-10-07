module.exports = {
  async up(db, client) {
    // Create the 'plan_types' collection
    await db.createCollection('plans');
  },

  async down(db, client) {
    // Drop the 'plan_types' collection
    await db.collection('plans').drop();
  },
};
