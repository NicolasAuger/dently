/**
 * User model events
 */

'use strict';

import {EventEmitter} from 'events';
import Fiche from './fiche.model';
var FicheEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FicheEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Fiche.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FicheEvents.emit(`${event}:${doc._id}`, doc);
    FicheEvents.emit(event, doc);
  };
}

export default FicheEvents;
