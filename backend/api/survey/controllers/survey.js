'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async last(ctx) {
    const count = await strapi.services.survey.count()
    // console.log('count: ', count)
    const params = { id: count }
    const entity = await strapi.services.survey.findOne(params);
    return {
      "errno": 0,
      "errmsg": "",
      "data": sanitizeEntity(entity, { model: strapi.models.survey })
    }
  }
};
