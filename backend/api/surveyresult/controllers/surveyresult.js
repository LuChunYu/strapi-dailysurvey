'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.surveyresult.create(data, { files });
    } else {
      entity = await strapi.services.surveyresult.create(ctx.request.body);
    }
    return {
      "errno": 0,
      "errmsg": ""
    }
    // sanitizeEntity(entity, { model: strapi.models.surveyresult });
  },
};
