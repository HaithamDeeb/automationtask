Feature: Subscription
    Scenario: Validating '<plan>' subscription package with '<price>' and Currency of '<country>'
        Given User navigates to URL
        When User selects '<country>' from countries popup
        Then User should see '<plan>' plan with '<price>' of '<country>' currency

    
    Examples:
        | country      | plan    | price |
        | Saudi Arabia | Lite    | 15    |
        | Saudi Arabia | Classic | 25    |
        | Saudi Arabia | Premium | 60    |
        | Bahrain      | Lite    | 2     |
        | Bahrain      | Classic | 3     |
        | Bahrain      | Premium | 6     |
        | Kuwait       | Lite    | 1.2   |
        | Kuwait       | Classic | 2.5   |
        | Kuwait       | Premium | 4.8   |
    