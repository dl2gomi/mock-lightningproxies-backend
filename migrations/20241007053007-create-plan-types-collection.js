module.exports = {
  async up(db, client) {
    // Create the 'plan_types' collection
    await db.createCollection('plan_types');
  },

  async down(db, client) {
    // Drop the 'plan_types' collection
    await db.collection('plan_types').drop();
  },
};
