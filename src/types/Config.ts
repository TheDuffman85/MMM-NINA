export type Config = {
  ags: string | string[]
  downgradeLhpSeverity: boolean
  downgradeCancelSeverity: boolean
  excludeProviders: string[]
  hideCancelledWarnings: boolean
  maxAgeInHours: number
  maxWidth?: string
  mergeAlerts: boolean
  mergeAlertTitels: boolean
  showCity: boolean
  showDate: boolean
  showIcon: boolean
  showNoWarning: boolean
  theme: string
  updateIntervalInSeconds: number
}
