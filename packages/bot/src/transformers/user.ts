import type { DiscordUser, PremiumTypes } from '@discordeno/types'
import { iconHashToBigInt } from '@discordeno/utils'
import { ToggleBitfield, UserToggles, type Bot } from '../index.js'

const baseUser: Partial<User> & BaseUser = {
  get tag() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${this.username}#${this.discriminator}`
  },
  get bot() {
    return !!this.toggles?.has('bot')
  },
  get system() {
    return !!this.toggles?.has('system')
  },
  get mfaEnabled() {
    return !!this.toggles?.has('mfaEnabled')
  },
  get verified() {
    return !!this.toggles?.has('verified')
  },
}

export function transformUser(bot: Bot, payload: DiscordUser): User {
  const user: User = Object.create(baseUser)
  const props = bot.transformers.desiredProperties.user

  if (props.bot || props.system || props.mfaEnabled || props.verified) {
    user.toggles = new UserToggles(payload)
  }
  if (props.flags) user.flags = new ToggleBitfield(payload.flags)
  if (props.publicFlags) user.publicFlags = new ToggleBitfield(payload.public_flags)
  if (payload.id && props.id) user.id = bot.transformers.snowflake(payload.id)
  if (payload.username && props.username) user.username = payload.username
  if (payload.global_name && props.globalName) user.globalName = payload.global_name
  if (payload.discriminator && props.discriminator) user.discriminator = payload.discriminator
  if (payload.locale && props.locale) user.locale = payload.locale
  if (payload.email && props.email) user.email = payload.email
  if (payload.premium_type && props.premiumType) user.premiumType = payload.premium_type
  if (payload.avatar && props.avatar) user.avatar = iconHashToBigInt(payload.avatar)
  if (payload.banner && props.banner) user.banner = iconHashToBigInt(payload.banner)
  if (payload.avatar_decoration && props.avatarDecoration) user.avatarDecoration = iconHashToBigInt(payload.avatar_decoration)
  if (payload.accent_color && props.accentColor) user.accentColor = payload.accent_color

  return bot.transformers.customizers.user(bot, payload, user)
}

export interface BaseUser {
  /** The user tag in the form of username#discriminator */
  tag: string
  /** Whether the user belongs to an OAuth2 application */
  bot: boolean
  /** Whether the user is an Official Discord System user (part of the urgent message system) */
  system: boolean
  /** Whether the user has two factor enabled on their account */
  mfaEnabled: boolean
  /** Whether the email on this account has been verified */
  verified: boolean
}

export interface User extends BaseUser {
  /** Compressed version of all the booleans on a user. */
  toggles?: UserToggles
  /** The user's username, not unique across the platform */
  username: string
  /** The user's display name, if it is set. For bots, this is the application name */
  globalName?: string
  /** The user's chosen language option */
  locale?: string
  /** The flags on a user's account */
  flags?: ToggleBitfield
  /** The type of Nitro subscription on a user's account */
  premiumType?: PremiumTypes
  /** The public flags on a user's account */
  publicFlags?: ToggleBitfield
  /** the user's banner color encoded as an integer representation of hexadecimal color code */
  accentColor?: number
  /** The user's id */
  id: bigint
  /** The user's discord-tag */
  discriminator: string
  /** The user's avatar hash */
  avatar?: bigint
  /** The user's email */
  email?: string
  /** the user's banner, or null if unset */
  banner?: bigint
  /** the user's avatar decoration, or null if unset */
  avatarDecoration?: bigint
}
