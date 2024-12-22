const ConverterForm = () => {
    return (
        <form className="form">
        <div className="form-group">
          <label className="form-label">Enter Amount: </label>
          <input type="number" className="form-input" required />
        </div>

        <div className="form-group form-group-currency">
          <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/BE/flat/64.png" alt="flag" />
              <select className="currency-dropdown">
                <option value="USD" selected>
                  USD
                </option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          <div className="swap-icon">
            <svg
              width="16"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#d63384"
              />
            </svg>
          </div>

          <div className="form-section">
            <label className="form-label">To</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/BE/flat/64.png" alt="flag" />
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="INR" selected>
                  INR
                </option>
              </select>
            </div>
          </div>
        </div>

        <button className="submit-button">Get Exchange Rate</button>
        <p className="result">1,000 USD = 83620.80 INR</p>
      </form>
    )
}

export default ConverterForm;