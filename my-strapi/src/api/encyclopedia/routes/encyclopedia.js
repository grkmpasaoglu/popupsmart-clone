'use strict';

/**
 * encyclopedia router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::encyclopedia.encyclopedia');
