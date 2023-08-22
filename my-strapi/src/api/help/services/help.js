'use strict';

/**
 * help service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::help.help');
