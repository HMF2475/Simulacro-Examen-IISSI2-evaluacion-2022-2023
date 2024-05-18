import { RestaurantCategory } from '../../models/models.js'
import { check } from 'express-validator'

const checkDoesNotExistYet = async (value, { req }) => {
  try {
    const restaurant = await RestaurantCategory.findOne({
      where: { name: req.body.name }
    })
    if (restaurant === null) {
      return Promise.resolve()
    } else { return Promise.reject(new Error('That category already exists')) }
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}
const create = [
  check('name').exists().isString().isLength({ min: 1, max: 255 }).trim().custom(checkDoesNotExistYet)
]
export { create }
