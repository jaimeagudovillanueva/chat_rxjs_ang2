/* SystemJS module definition */
declare var module: NodeModule;

declare module 'underscore';
declare module 'moment';

interface NodeModule {
  id: string;
}