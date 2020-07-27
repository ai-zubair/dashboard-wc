export const FancyCardContent = `
  <style>
    :host{
      display: block;
      width: 100%;
      transition: height 0.5s ease;
    }
    .card-wrapper{
      width: 100%;
      height: 100%;
      border: 1px solid #c1c1c1;
      box-shadow: 0px 0px 4px 0px #b3b3b3;
      border-radius: 5px;
      padding: 20px 20px 0px 20px;
      box-sizing: border-box;
      font-family: Roboto,'sans-serif';
      display: grid;
      grid-template-areas: 'customer-details professional-details date-details'
                           'additional-details additional-details additional-details';
      grid-column-gap: 10px;
      transition: height 0.5s ease;
    }
    .card-wrapper:hover{
      cursor: pointer;
    }
    .card-item-wrapper{
      border: 1px solid #CFD8DC;
      border-radius: 5px;
      padding: 14px;
      position: relative;
      margin-bottom: 20px;
    }
    .card-item-label{
      position: absolute;
      top: -8px;
      left: 8px;
      background-color: white;
      padding: 0px 6px;
      font-size: 14px;
      font-weight: 300;
    }
    .customer-details-wrapper{
      grid-area: customer-details;
    }
    .professional-details-wrapper{
      grid-area: professional-details;
    }
    .date-wrapper{
      grid-area: date-details;
    }
    .additional-details{
      display: none;
    }
    :host([active]) .additional-details{
      grid-area: additional-details;
      display: grid;
      grid-template-areas: 'type-location payment-wrapper completion-wrapper';
      grid-column-gap: 10px;      
    }
    .type-location-wrapper{
      grid-area: type-location;
    }
    .payment-wrapper{
      grid-area: payment-wrapper;
    }
    .completion-wrapper{
      grid-area: completion-wrapper;
    }

  </style>

  <div id="card-wrapper" class="card-wrapper">

    <div class="customer-details-wrapper">

      <div class="card-item-wrapper">
        <label class="card-item-label">Customer</label>
        <slot name="customer-name"></slot>
      </div>

      <div class="card-item-wrapper">
        <label class="card-item-label">Phone</label>
        <slot name="customer-phone"></slot>
      </div>

    </div>

    <div class="professional-details-wrapper">

      <div class="card-item-wrapper">
        <label class="card-item-label">Professional</label>
        <slot name="professional-name"></slot>
      </div>

      <div class="card-item-wrapper">
        <label class="card-item-label">Phone</label>
        <slot name="professional-phone"></slot>
      </div>

    </div>

    <div class="date-wrapper">

      <div class="card-item-wrapper">
        <label class="card-item-label">Created</label>
        <slot name="date-created"></slot>
      </div>

      <div class="card-item-wrapper">
        <label class="card-item-label">Scheduled</label>
        <slot name="date-scheduled"></slot>
      </div>

    </div>

    <div class="additional-details">

      <div class="type-location-wrapper">

        <div class="card-item-wrapper">
          <label class="card-item-label">Service</label>
          <slot name="service-type"></slot>
        </div>

        <div class="card-item-wrapper">
          <label class="card-item-label">Location</label>
          <slot name="service-location"></slot>
        </div>

      </div>

      <div class="payment-wrapper">

        <div class="card-item-wrapper">
          <label class="card-item-label">Amount</label>
          <slot name="service-cost"></slot>
        </div>

        <div class="card-item-wrapper">
          <label class="card-item-label">Method</label>
          <slot name="payment-method"></slot>
        </div>

      </div>

      <div class="completion-wrapper">

        <div class="card-item-wrapper">
          <label class="card-item-label">Status</label>
          <slot name="service-completed"></slot>
        </div>

        <div class="card-item-wrapper">
          <label class="card-item-label">Rating</label>
          <slot name="customer-feedback"></slot>
        </div>

      </div>

    </div>

  </div>
`;