import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'
import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryController.create
    )
}
export default loadFileRoutes
