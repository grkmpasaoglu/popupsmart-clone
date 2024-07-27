'use strict';

/**
 * encyclopedia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::encyclopedia.encyclopedia');
