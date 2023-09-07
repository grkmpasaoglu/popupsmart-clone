'use strict';

/**
 * campaign-builder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::campaign-builder.campaign-builder');
