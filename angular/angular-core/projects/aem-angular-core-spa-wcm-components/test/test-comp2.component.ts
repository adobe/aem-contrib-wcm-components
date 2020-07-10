/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2020 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-comp2',
  host: {
    '[attr.data-title]': 'title'
  },
  template: `<div>{{ title }}</div>`
})

export class Component2 {
  @Input() title:any;

  constructor() {}
}
