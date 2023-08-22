'use strict';

/**
 * getting-started service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::getting-started.getting-started');
