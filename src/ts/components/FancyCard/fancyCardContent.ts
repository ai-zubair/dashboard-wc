import styles from 'bundle-text:./fancyCard.scss';

export const FancyCardContent = `
  <style>
    ${styles}
  </style>
  <div id="card-wrapper" class="card-wrapper">

    <div class="customer-details-wrapper">

      <div class="card-item-wrapper customer-name">
        <label class="card-item-label">Customer</label>
        <slot name="customer-name"></slot>
      </div>

      <div class="card-item-wrapper customer-phone">
        <label class="card-item-label">Phone</label>
        <slot name="customer-phone"></slot>
      </div>

    </div>

    <div class="professional-details-wrapper">

      <div class="card-item-wrapper professional-name">
        <label class="card-item-label">Professional</label>
        <slot name="professional-name"></slot>
      </div>

      <div class="card-item-wrapper professional-phone">
        <label class="card-item-label">Phone</label>
        <slot name="professional-phone"></slot>
      </div>

    </div>

    <div class="date-wrapper">

      <div class="card-item-wrapper date-scheduled">
        <label class="card-item-label">Scheduled</label>
        <slot name="date-scheduled"></slot>
      </div>

      <div class="card-item-wrapper date-created">
        <label class="card-item-label">Created</label>
        <slot name="date-created"></slot>
      </div>

    </div>

    <div class="type-location-wrapper">

      <div class="card-item-wrapper service-type">
        <label class="card-item-label">Service</label>
        <slot name="service-type"></slot>
      </div>

      <div class="card-item-wrapper service-location">
        <label class="card-item-label">Location</label>
        <slot name="service-location"></slot>
      </div>

    </div>

    <div class="payment-wrapper">

      <div class="card-item-wrapper service-cost">
        <label class="card-item-label">Amount</label>
        <slot name="service-cost"></slot>
      </div>

      <div class="card-item-wrapper payment-method">
        <label class="card-item-label">Method</label>
        <slot name="payment-method"></slot>
      </div>

    </div>

    <div class="completion-wrapper">

      <div class="card-item-wrapper service-completed">
        <label class="card-item-label">Status</label>
        <slot name="service-completed"></slot>
      </div>

      <div class="card-item-wrapper customer-feedback">
        <label class="card-item-label">Rating</label>
        <slot name="customer-feedback"></slot>
      </div>

    </div>

  </div>
`;