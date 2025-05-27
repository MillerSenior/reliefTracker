export function MetaSettings() {
  return (
    <>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      {/* Prevent iOS from modifying the viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </>
  )
} 