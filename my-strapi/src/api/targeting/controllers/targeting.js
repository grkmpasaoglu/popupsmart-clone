// @ts-nocheck
'use strict';

/**
 * targeting controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::targeting.targeting', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::targeting.targeting').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));

