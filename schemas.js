'use strict';

const Joi = require('joi');

module.exports = {
  config: Joi.object({
    sitemapDirectoryUrl: Joi.string().uri().default(''),
    date: Joi.date().iso().default(new Date().toISOString()),
    limit: Joi.number().integer().min(1).default(50000),
    isMobile: Joi.boolean().default(false),
    outputFolder: Joi.string().default('./'),
    toCompress: Joi.boolean().default(true),
    hasAlternateLinks: Joi.boolean().default(false)
  }),

  entry: Joi.object({
    url: Joi.string().required(),
    lastmod: Joi.date().iso().default(new Date().toISOString()),
    changeFreq: Joi.string(),
    priority: Joi.number().min(0).max(1),
    links: Joi.array().items(Joi.object({
      hreflang: Joi.string().required(),
      href: Joi.string().uri().required()
    }))
  })
};
