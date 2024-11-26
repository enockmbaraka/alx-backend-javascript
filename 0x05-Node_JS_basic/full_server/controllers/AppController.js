/**
 * Contains the miscellaneous route handlers.
 * @author Enock <https://github.com/enockmbaraka>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
