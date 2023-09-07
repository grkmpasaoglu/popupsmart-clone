'use strict';

/**
 * targeting router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::targeting.targeting');
