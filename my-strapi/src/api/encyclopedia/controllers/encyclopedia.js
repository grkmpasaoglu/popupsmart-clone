// @ts-nocheck
'use strict';

/**
 * encyclopedia controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::encyclopedia.encyclopedia', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::encyclopedia.encyclopedia').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));

