export type Config = {
  ags: string | string[]
  mergeAlerts: boolean
  mergeAlertTitels: boolean
  maxAgeInHours: number
  maxWidth?: string
  showNoWarning: boolean
  showIcon: boolean
  showDate: boolean
  showCity: boolean
  theme: string
  updateIntervalInSeconds: number
  excludeProviders: string[]
  downgradeLhpSeverity: boolean
  downgradeCancelSeverity: boolean
}
