import Badge from './Badge'

const STATUS_MAP = {
  'Active':               'success',
  'Pending Docs':         'warning',
  'Interview Scheduled':  'info',
  'Offer Received':       'purple',
  'Visa Applied':         'secondary',
  'Paused':               'warning',
  'Draft':                'secondary',
  'Verified':             'success',
  'Pending':              'warning',
}

export default function StatusBadge({ status }) {
  return <Badge variant={STATUS_MAP[status] ?? 'default'}>{status}</Badge>
}
