import {
  model,
  Schema,
} from 'mongoose';

const VisualTestSchema = new Schema({
  '_id': {
    'type': 'String',
  },
  'app': {
    'identifier': {
      'type': 'String',
    },
    'description': {
      'type': 'String',
    },
    '__typename': {
      'type': 'String',
    },
  },
  'link': {
    'type': 'String',
  },
  'user': {
    'type': 'Mixed',
  },
  'devices': {
    'type': [
      'Mixed'
    ]
  }
});

const VISUAL_TEST_COLLECTION = 'VisualTest';

const VisualTestModel = model(VISUAL_TEST_COLLECTION, VisualTestSchema);

export default VisualTestModel;
