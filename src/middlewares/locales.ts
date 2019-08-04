import { readdirSync, readFileSync } from 'fs'
import { safeLoad } from 'js-yaml'
import { BaseContext } from 'koa'
import { get } from 'lodash'
import { basename } from 'path'

interface Languages {
  [key: string]: Languages
}

const languages: Languages = {}

export const translate = (key: string, language: string = 'en') => {
  return get(languages, `${language}.${key}`, `${language}.${key}`)
}

export const loadLocales = async (ctx: BaseContext, next: () => {}): Promise<void> => {
  const files = await readdirSync('locales')

  for (let i = 0; i < files.length; i++) {
    if (files[i].split('.yaml').length === 2) {
      languages[basename(files[i], '.yaml')] = safeLoad(readFileSync(`locales/${files[i]}`, 'utf8'))
    }
  }

  ctx.__ = translate
  next()
}
