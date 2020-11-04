/**
 * StytchLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MagicLinkSend
 */
class MagicLinkSend extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.userId = this.constructor.getValue(obj.userId || obj.user_id);
        this.methodId = this.constructor.getValue(obj.methodId || obj.method_id);
        this.magicLinkUrl = this.constructor.getValue(obj.magicLinkUrl || obj.magic_link_url);
        this.expirationMinutes =
          this.constructor.getValue(obj.expirationMinutes
     || obj.expiration_minutes);
        this.templateId = this.constructor.getValue(obj.templateId || obj.template_id);
        this.attributes = this.constructor.getValue(obj.attributes);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'userId', realName: 'user_id' },
            { name: 'methodId', realName: 'method_id' },
            { name: 'magicLinkUrl', realName: 'magic_link_url' },
            { name: 'expirationMinutes', realName: 'expiration_minutes' },
            { name: 'templateId', realName: 'template_id' },
            { name: 'attributes', realName: 'attributes', type: 'Attributes' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = MagicLinkSend;