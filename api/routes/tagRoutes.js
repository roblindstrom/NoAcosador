module.exports = (app) => {
    const tag = require('../controllers/tagController');
// the routes for a  tag
app.route('/tag')
    .get(tag.list_all_tags)
    .post(tag.create_a_tag);

app.route('/tag/:tagId')
    .get(tag.get_a_tag)
    .put(tag.update_a_tag)
    .delete(tag.delete_a_tag);
};